package com.higradius;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class FetchDataServlet
 */
@WebServlet("/FetchDataServlet")
public class FetchDataServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       static final String JDBC_DRIVER= "com.mysql.cj.jdbc.Driver";
        static final String DB_URL = "jdbc:mysql://localhost/project";
        
        private static final String USER = "root";
        private static final String PASSWORD = "1234";
        
          
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FetchDataServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		Connection conn = null;
		Statement stmt = null;
		String sql = null;
		ResultSet rs = null;
		List<Response> InvoiceList = new ArrayList<>();
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			conn = DriverManager.getConnection(DB_URL,USER,PASSWORD);
			stmt = conn.createStatement();
			sql = "select name_customer,cust_number,invoice_id,total_open_amount,due_in_date,payment_predict_date,Notes from mytable";
			rs = stmt.executeQuery(sql);
			
			while(rs.next()) {
				Response mytable = new Response();
				mytable.setCustomer_Name(rs.getString("name_customer"));
				mytable.setCustomer_ID(rs.getString("cust_number"));
				mytable.setInvoice_ID(rs.getFloat("invoice_id"));
				mytable.setInvoice_Amount(rs.getFloat("total_open_amount"));
				mytable.setDue_Date(rs.getDate("due_in_date"));
				mytable.setPredicted_Payment_Date(rs.getDate("payment_predict_date"));
				mytable.setNotes(rs.getString("Notes"));
				
				InvoiceList.add(mytable);
			}
	
			Gson gson = new Gson();
			String json = gson.toJson(InvoiceList);
			PrintWriter printWriter = response.getWriter();
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
	        printWriter.write(json);
	        printWriter.close();
	        rs.close();
			stmt.close();
			conn.close();
			
	} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (stmt != null)
					stmt.close();
			} catch (SQLException se2) {
				se2.printStackTrace();
			}
			try {
				if(conn != null) 
					conn.close();
			} catch(SQLException se ) {
				se.printStackTrace();
			}
		}
		
	
	
	}



	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}