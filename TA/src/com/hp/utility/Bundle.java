package com.hp.utility;


import java.util.MissingResourceException;
import java.util.ResourceBundle;

public class Bundle{
	    private static final ResourceBundle RESOURCE_BUNDLE = ResourceBundle.getBundle("settings"); //resource.properties file
	  /*
	    private static ResourceBundle RESOURCE_BUNDLE_ABSOLUTEPATH=null;
	    static{
	    	 File file = new File(""); //any parent path you specified here
	    	 try {
		    		 URL[]  urls={file.toURI().toURL()};
		    		 ClassLoader loader = new URLClassLoader(urls);
			    	 RESOURCE_BUNDLE_ABSOLUTEPATH = ResourceBundle.getBundle("settings", Locale.getDefault(), loader);
	    		 } 
	    	 catch (MalformedURLException e){
			        e.printStackTrace();
			 }	    	
	     }*/
	  
	   
	   /** 
	* @Title: getClassPathString 
	* @Description: TODO
	* @author alterhu2020@gmail.com
	* @param @param key
	* @param @return    
	* @return String    return type
	* @throws 
	*/ 
	
	public static String getClassPathString(String key) {
	     try {
	        return RESOURCE_BUNDLE.getString(key);
	     } catch (MissingResourceException e) {
	       return '!' + key + '!'; 
	     }	 
	   }
	
	
	   /** 
	* @Title: getAbsolutePathString 
	* @Description: TODO
	* @author alterhu2020@gmail.com
	* @param @param key
	* @param @return    
	* @return String    return type
	* @throws 
	*/ 
	
	/*public static String getAbsolutePathString(String key) {
		     try {
		        return RESOURCE_BUNDLE_ABSOLUTEPATH.getString(key);
		     } catch (MissingResourceException e) {
		       return '!' + key + '!'; 
		     }
		     
		 
		   }
		   
		   */
	}
