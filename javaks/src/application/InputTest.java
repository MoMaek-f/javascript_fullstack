package application;
import java.io.*;
public class InputTest{
public static void main(String[] args) throws IOException{
  BufferedReader bufr = new BufferedReader(new InputStreamReader(System.in));
  BufferedWriter bufw = new BufferedWriter(new FileWriter("C:\\Users\\10342\\Desktop\\test.txt"));
  
  System.out.println("������γ̱��:");
  String classnum = bufr.readLine();
  bufw.write(classnum);
  bufw.newLine();
  System.out.println("�γ̱�ţ�" + classnum);
  
  System.out.println("������γ�����:");
  String classname = bufr.readLine();
  bufw.write(classname);
  bufw.newLine();
  System.out.println("�γ����ƣ�"+classname);
  
  bufr.close();
  bufw.close();
   }
}
