package com.higradius;

public class Response {
String cust_number;
long doc_id;
String due_in_date;
double total_open_amount;
String predicted_clear_date;

public String getName() {
	return cust_number;
}


public void setName(String cust_number) {
	this.cust_number = cust_number;
}


public long getID() {
	return doc_id;
}


public void setID(long doc_id) {
	this.doc_id = doc_id;
}


public double getAmount() {
	return total_open_amount;
}


public void setAmount(double total_open_amount) {
	this.total_open_amount = total_open_amount;
}


public String getDueDate() {
	return due_in_date;
}


public void setDueDate(String due_in_date) {
	this.due_in_date = due_in_date;
}

public String getPredDate() {
	return predicted_clear_date;
}


public void setPredDate(String predicted_clear_date) {
	this.predicted_clear_date = predicted_clear_date;
}

}

