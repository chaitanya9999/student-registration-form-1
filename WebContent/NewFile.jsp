<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%@ page import = "java.sql.*" %>
<%@ page import = "javax.sql.*" %>
<%
String first_name =request.getParameter("first_name");
session.putValue("first_name" ,first_name);
String last_name =request.getParameter("last_name");
String phone_no =request.getParameter("phone_no");
String password =request.getParameter("password");
String conform_password =request.getParameter("conform_password");
String Email_Id =request.getParameter("Email_Id");
String Date_Of_Birth =request.getParameter("Date_Of_Birth");
String gender =request.getParameter("gender");
String  address =request.getParameter("address");

static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";  
   static final String DB_URL = "C
%>
</body>
</html>