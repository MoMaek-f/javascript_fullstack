package application;
import java.io.*;
public class File {
   public static void main(String[] args) throws IOException, ClassNotFoundException
   {
	   try(ObjectOutputStream output =
			   new ObjectOutputStream(new FileOutputStream("C:\\Users\\10342\\Desktop\\object.txt"))
			   )
	   {
		   output.writeDouble(1011101);
		   output.writeUTF("java");
		   output.writeUTF("必修课");
		   output.writeDouble(60);
		   output.writeDouble(40);
		   output.writeDouble(20);
		   output.writeDouble(4);
		   output.writeUTF("第四学期");
//		   output.writeObject(new java.util.Date());
	   }
	   try(ObjectInputStream input = 
			   new ObjectInputStream(new FileInputStream("C:\\Users\\10342\\Desktop\\object.txt"))
			   )
	   {
		   double number =input.readDouble();
		   String name=input.readUTF();
		   String score =input.readUTF();
		   double zxs =input.readDouble();
		   double skxs =input.readDouble();
		   double syxs =input.readDouble();
		   double xf =input.readDouble();
		   String semester =input.readUTF();
//		   java.util.Date date =(java.util.Date)(input.readObject());
		   System.out.println(number + " " + name + " " +score+ " " +zxs+ " " +skxs+ " " +syxs+ " " +xf+ " " + semester);
	   }
   }	
}
