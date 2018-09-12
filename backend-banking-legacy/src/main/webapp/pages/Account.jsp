<%@ page language="java"

contentType="application/json; charset=UTF-8" pageEncoding="UTF-8"%>

<%@page import="org.json.JSONObject"%>
<%@page import="java.lang.Math"%>

<%
	JSONObject obj = new JSONObject();
	obj.put("id", request.getParameter("id"));
	obj.put("name", "Checking");
	obj.put("description", "My crusty old checking account that has been around for the last 20 years. " +
	 "This application is built on apache struts 1.x. No Spring Boot!");
	float balance = (float)(Math.random() * (10000));
	obj.put("balance", String.format("%.02f", balance));
%>

<%=obj%>
