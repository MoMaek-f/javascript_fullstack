package lab2;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;

public class ArrayListlab {
   public static void main(String[] args) {
	  
	   try(ObjectOutputStream obs = new ObjectOutputStream(new FileOutputStream("d:\\stu1.txt")) )
	   { 
		   ArrayList<Student> list = new ArrayList<>();
		   Student student = new Student(1,"����");
		   Student student1 = new Student(2,"����");
			list.add(student);
			list.add(student1);
		   obs.writeObject(list);
		   obs.flush();
		   System.out.print("���л����\n");
		   
	   }catch(Exception ex) {
		   ex.printStackTrace();
	   }
	   
	   try(ObjectInputStream ois = new ObjectInputStream(new FileInputStream("d:\\stu1.txt")) )
	   {
		   ArrayList<Student> list1 =(ArrayList<Student>)ois.readObject();
		//   Student student = (Student)ois.readObject();
		   System.out.print("���л���ϣ������Ķ�����Ϣ����\n");
		   System.out.print(list1);
		   
	   }catch(Exception ex) {
		   ex.printStackTrace();
	   }
	   
	  
   }
   
}
