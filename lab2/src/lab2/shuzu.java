package lab2;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.lang.reflect.Array;

public class shuzu {
      public static void main(String[] args) {
    	   	 
    	  try (ObjectOutputStream fos = new ObjectOutputStream(new FileOutputStream("d:\\stu2.txt"))){
    		  
			   Student [] stu;
	    	  stu = new Student[3];
	    	  stu[0] = new Student(1,"张三");
	    	  stu[1] = new Student(2,"李智");
	    	  fos.writeObject(stu[0]);			
	    	  fos.writeObject(stu[1]);			
		} catch (Exception e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		} 
    	  try (ObjectInputStream fis = new ObjectInputStream(new FileInputStream("d:\\stu2.txt"))){
    		  Student [] stu1;
    		  stu1 = new Student[3];
    		  stu1[0] = (Student)fis.readObject();
    		  stu1[1] = (Student)fis.readObject();
    		     		  
    		  System.out.println(stu1[0]);
    		  System.out.println(stu1[1]);
    		 
			   
	    	  		
		} catch (Exception e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
      }
}
