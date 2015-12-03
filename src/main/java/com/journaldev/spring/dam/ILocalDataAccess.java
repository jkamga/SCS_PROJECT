package com.journaldev.spring.dam;

import org.codehaus.jettison.json.JSONArray;
import org.codehaus.jettison.json.JSONException;

public interface ILocalDataAccess {

	boolean addLocal(String local);
	
	public JSONArray getLocalsList() throws JSONException;
}
