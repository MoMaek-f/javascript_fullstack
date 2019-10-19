package application;
import java.io.*;
public class InputTest{
public static void main(String[] args) throws IOException{
  BufferedReader bufr = new BufferedReader(new InputStreamReader(System.in));
  BufferedWriter bufw = new BufferedWriter(new FileWriter("C:\\Users\\10342\\Desktop\\test.txt"));
  
  System.out.println("请输入课程编号:");
  String classnum = bufr.readLine();
  bufw.write(classnum);
  bufw.newLine();
  System.out.println("课程编号：" + classnum);
  
  System.out.println("请输入课程名称:");
  String classname = bufr.readLine();
  bufw.write(classname);
  bufw.newLine();
  System.out.println("课程名称："+classname);
  
  bufr.close();
  bufw.close();
   }
}
