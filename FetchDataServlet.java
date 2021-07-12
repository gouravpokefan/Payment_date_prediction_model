package com.higradius;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Servlet implementation class FetchDataServlet
 */
@WebServlet("/FetchDataServlet")
public class FetchDataServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	// JDBC driver name and database URL
	static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
	static final String DB_URL = "jdbc:mysql://localhost:3306/highradius";
	// Database credentials
	static final String USER = "root";
	static final String PASS = "root";
       
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
		response.getWriter().append("Served at: ").append(request.getContextPath());
		Connection conn = null;
		Statement stmt = null;
		try{
			//STEP 2: Register JDBC driver
			Class.forName("com.mysql.cj.jdbc.Driver");
			//STEP 3: Open a connection
			conn = DriverManager.getConnection(DB_URL,USER,PASS);
			stmt=conn.createStatement();
			String sql;
			sql="select cust_number , doc_id , total_open_amount , due_in_date  , predicted_clear_date from mytable";
			ResultSet rs = stmt.executeQuery(sql);
			//Creating an ArrayList object
			ArrayList<Response> demolist = new ArrayList<>();
			
			
			//Adding the Records of the table to the Array List
			while(rs.next()) {
			Response dem = new Response();
			dem.setName(rs.getString("cust_number"));
			dem.setID(rs.getLong("doc_id"));
			dem.setAmount(rs.getDouble("total_open_amount"));
			dem.setDueDate(rs.getString("due_in_date"));
			dem.setPredDate(rs.getString("predicted_clear_date"));
			demolist.add(dem);
			}
			
			Gson gson = new GsonBuilder().setPrettyPrinting().create();
			String json = gson.toJson(demolist);
			System.out.println(json);
			response.setContentType("application/json");
			response.getWriter().write(json);
					
			
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}

	private String getjSONStringFromObject(List<Response> demolist) {
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		String  json = gson.toJson(demolist);
		System.out.println(json);
		return json;
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}






