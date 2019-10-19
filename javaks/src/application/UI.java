package application;
import javafx.application.Application;
import javafx.stage.Stage;  
import javafx.scene.Scene;   
import javafx.scene.control.Button;  
import javafx.scene.control.Label;
import javafx.scene.control.ScrollPane;
import javafx.scene.control.TextField;
import javafx.geometry.Pos;
import javafx.geometry.HPos;
import javafx.geometry.Insets;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.HBox;

import java.sql.*;
import javafx.scene.control.TextArea;
import java.sql.PreparedStatement;

public class UI extends Application {
	private TextField num1 =new TextField();
	private TextField num2 =new TextField();
	private TextField num3 =new TextField(); 
	private TextField num4 =new TextField();
	private TextField num5 =new TextField();
	private TextField num6 =new TextField();
	private TextField num7 =new TextField();
	private TextField num8 =new TextField();
	private TextField num9 =new TextField();
	private TextField num10 =new TextField();
	private TextField num11 =new TextField();
	private TextField num12 =new TextField();
	@Override
	public void start(Stage primaryStage)
	{  
	
		GridPane pane =new GridPane();
		pane.setAlignment(Pos.CENTER);
		pane.setPadding(new Insets(111.2,121.5,131.5,141.5));
		pane.setHgap(5.5);
		pane.setVgap(5.5);
		
		pane.add(new Label("Username:"),0,0);
		pane.add(num1,1,0);
		pane.add(new Label("Passward:"),0,1);
		pane.add(num2,1,1);
		Button btlogin =new Button("Login");
		btlogin.setOnAction(e->menu());
		pane.add(btlogin,1,2);
		GridPane.setHalignment(btlogin,HPos.RIGHT);
		
		Scene scene =new Scene(pane);
		primaryStage.setTitle("ѡ�޵�¼ϵͳ");
		primaryStage.setScene(scene);
		primaryStage.show();
	}

	private void menu() {
		// TODO �Զ����ɵķ������
		GridPane pane =new GridPane();
		pane.setAlignment(Pos.CENTER);
		pane.setPadding(new Insets(111.2,121.5,131.5,141.5));
		pane.setHgap(5.5);
		pane.setVgap(5.5);
		
		Button btinput =new Button("�γ���Ϣ¼��");
		btinput.setOnAction(e->input());
		pane.add(btinput,0,0);
		Button btoutput =new Button("�γ���Ϣ���");
		btoutput.setOnAction(e->output());
		pane.add(btoutput,0,1);
		Button btlook =new Button("�γ���Ϣ��ѯ");
		btlook.setOnAction(e->lookup());
		pane.add(btlook,0,2);
		
		Scene scene =new Scene(pane);
		Stage stage =new Stage();
		stage.setTitle("ѡ��ϵͳ");
		stage.setScene(scene);
		stage.show();
		
	}

	private void lookup() {
		// TODO �Զ����ɵķ������
		GridPane pane =new GridPane();
		pane.setAlignment(Pos.CENTER);
		pane.setPadding(new Insets(111.2,121.5,131.5,141.5));
		pane.setHgap(5.5);
		pane.setVgap(5.5);
		
			Button btinput =new Button("��  ѧ   ��  ��   ѯ");
			btinput.setOnAction(e->xflook ());
			pane.add(btinput,0,0);
			Button btoutput =new Button("�� �γ� ���� ��ѯ");
			btoutput.setOnAction(e->typelook());
			pane.add(btoutput,0,1);
			Button btreturn =new Button(" ��                ��  ");
			btreturn.setOnAction(e->menu());
			pane.add(btreturn,0,3);
			
			Scene scene =new Scene(pane);
		Stage stage =new Stage();
		stage.setTitle("��ѯ�γ�");
		stage.setScene(scene);
		stage.show();
	}

	private void typelook() {
		// TODO �Զ����ɵķ������

		// TODO Auto-generated method stub
		GridPane pane =new GridPane();
		pane.setAlignment(Pos.CENTER);
		pane.setPadding(new Insets(111.2,121.5,131.5,141.5));
		pane.setHgap(5.5);
		pane.setVgap(5.5);
		
		pane.add(new Label("����γ�����:"),0,0);
		pane.add(num12,1,0);
		Button btreturn =new Button("����");
		btreturn.setOnAction(e->lookup());
		pane.add(btreturn,5,0);
		Button btcertain =new Button("ȷ��");
		btcertain.setOnAction(e->search2());
		pane.add(btcertain,6,0);
		
		Scene scene =new Scene(pane);
		Stage stage =new Stage();
		stage.setTitle("��ѯ�γ�");
		stage.setScene(scene);
		stage.show();
	}

	private void search2() {
		// TODO �Զ����ɵķ������
			// TODO �Զ����ɵķ������
			GridPane pane =new GridPane();
			pane.setAlignment(Pos.CENTER);
			pane.setPadding(new Insets(111.2,121.5,131.5,141.5));
			pane.setHgap(5.5);
			pane.setVgap(5.5);
			
			String n10 = num12.getText();
			
			try {
				Class.forName("com.mysql.cj.jdbc.Driver");   
				Connection connect = DriverManager.getConnection(
			    		  "jdbc:mysql://localhost:3306/ѧ��ѡ��ϵͳ?serverTimezone=GMT%2B8","root","1234");
				PreparedStatement pstmt = connect.prepareStatement("select * from class where kcxz = ?");
				pstmt.setString(1, n10);
				ResultSet rs1 = pstmt.executeQuery();
/*				Statement stmt = connect.createStatement();
				ResultSet rs = stmt.executeQuery("select * from class where kcxz = " + n10);*/
				
	            //user Ϊ��������

				TextArea mess =new TextArea();
				   mess.setWrapText(true);
				   mess.setEditable(false);
				   mess.setPrefColumnCount(100);
				   mess.setPrefRowCount(100);	
				   
				   
				while (rs1.next()) {
								
		mess.appendText(rs1.getString("num")+" "+rs1.getString("name")+" "+
		rs1.getString("kcxz")+" "+rs1.getString("zxs")+" "+rs1.getString("skxs")
		+" "+rs1.getString("syxs")+" "+rs1.getString("xf")+" "+rs1.getString("kkxq")+"\n");			
	//System.out.println(rs.getString("num")+" "+rs.getString("name")+" "+rs.getString("kcxz")+" "+rs.getString("zxs")+" "+rs.getString("skxs")+" "+rs.getString("syxs")+" "+rs.getString("xf")+" "+rs.getString("kkxq"));
	}
	   
	   HBox hbox=new HBox();
	   ScrollPane sp =new ScrollPane(mess);
	   sp.setMaxSize(500, 500);
	   hbox.getChildren().addAll(sp);
	   hbox.setAlignment(Pos.CENTER);
	   Scene scene=new Scene(hbox,800,400);
	   Stage stage =new Stage();
		stage.setTitle("��ѯ����");
		stage.setScene(scene);
		stage.show();	
			
			}
	catch (Exception e) {
	System.out.print(e);

	}
		
	}

	private void sure() {
		// TODO �Զ����ɵķ�
		GridPane pane =new GridPane();
		pane.setAlignment(Pos.CENTER);
		pane.setPadding(new Insets(11.2,11.5,11.5,141.5));
		pane.setHgap(5.5);
		pane.setVgap(5.5);
		
		int n1=Integer.parseInt(num4.getText());
		String n2=num5.getText();
		String n3=num6.getText();
		int n4=Integer.parseInt(num7.getText());
		int n5=Integer.parseInt(num8.getText());
		int n6=Integer.parseInt(num9.getText());
		int n7=Integer.parseInt(num10.getText());
		int n8=Integer.parseInt(num11.getText());
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");   
			Connection connect = DriverManager.getConnection(
		    		  "jdbc:mysql://localhost:3306/ѧ��ѡ��ϵͳ?serverTimezone=GMT%2B8","root","1234");
			Statement stmt = connect.createStatement();
		      stmt.execute("insert into class values("+n1+",'"+n2+"','"+n3+"',"+n4+","+n5+","+n6+","+n7+","+n8+");");
		      
		}
		      catch (Exception e) {
		          System.out.print(e);
		               
		}
		
		Button btcancle =new Button("¼��ɹ�");
		btcancle.setOnAction(e->input());
		pane.add(btcancle,0,0);
		
		Scene scene =new Scene(pane);
		Stage stage =new Stage();
		stage.setTitle("ѡ��ϵͳ");
		stage.setScene(scene);
		stage.show();
	}

	private void xflook() {
		// TODO �Զ����ɵķ������

		// TODO Auto-generated method stub
		GridPane pane =new GridPane();
		pane.setAlignment(Pos.CENTER);
		pane.setPadding(new Insets(111.2,121.5,131.5,141.5));
		pane.setHgap(5.5);
		pane.setVgap(5.5);
		
		pane.add(new Label("����ѧ��:"),0,0);
		pane.add(num3,1,0);
		

		
		Button btreturn =new Button("����");
		btreturn.setOnAction(e->lookup());
		pane.add(btreturn,5,0);
		Button btcertain =new Button("ȷ��");
		btcertain.setOnAction(e->search());
		pane.add(btcertain,6,0);
		
		Scene scene =new Scene(pane);
		Stage stage =new Stage();
		stage.setTitle("ѡ��ϵͳ");
		stage.setScene(scene);
		stage.show();
	}

	private void search() {
		// TODO �Զ����ɵķ������
		GridPane pane =new GridPane();
		pane.setAlignment(Pos.CENTER);
		pane.setPadding(new Insets(111.2,121.5,131.5,141.5));
		pane.setHgap(5.5);
		pane.setVgap(5.5);
		
		int n9=Integer.parseInt(num3.getText());
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");   
			Connection connect = DriverManager.getConnection(
		    		  "jdbc:mysql://localhost:3306/ѧ��ѡ��ϵͳ?serverTimezone=GMT%2B8","root","1234");
			PreparedStatement pstmt = connect.prepareStatement("select * from class where kcxz = ?");
			pstmt.setInt(1, n9);
			ResultSet rs = pstmt.executeQuery();
           

			TextArea mess =new TextArea();
			   mess.setWrapText(true);
			   mess.setEditable(false);
			   mess.setPrefColumnCount(100);
			   mess.setPrefRowCount(100);	
			   
			   
			while (rs.next()) {
							
	mess.appendText(rs.getString("num")+" "+rs.getString("name")+" "+
	rs.getString("kcxz")+" "+rs.getString("zxs")+" "+rs.getString("skxs")
	+" "+rs.getString("syxs")+" "+rs.getString("xf")+" "+rs.getString("kkxq")+"\n");			
//System.out.println(rs.getString("num")+" "+rs.getString("name")+" "+rs.getString("kcxz")+" "+rs.getString("zxs")+" "+rs.getString("skxs")+" "+rs.getString("syxs")+" "+rs.getString("xf")+" "+rs.getString("kkxq"));
}
   
   HBox hbox=new HBox();
   ScrollPane sp =new ScrollPane(mess);
   sp.setMaxSize(500, 500);
   hbox.getChildren().addAll(sp);
   hbox.setAlignment(Pos.CENTER);
   Scene scene=new Scene(hbox,800,400);
   Stage stage =new Stage();
	stage.setTitle("�������");
	stage.setScene(scene);
	stage.show();	
		
		}
catch (Exception e) {
System.out.print(e);

}
 	}

	
	
	private void output() {
		// TODO �Զ����ɵķ������
		GridPane pane =new GridPane();
		pane.setAlignment(Pos.CENTER);
		pane.setPadding(new Insets(111.2,121.5,131.5,141.5));
		pane.setHgap(5.5);
		pane.setVgap(5.5);
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");   
			Connection connect = DriverManager.getConnection(
		    		  "jdbc:mysql://localhost:3306/ѧ��ѡ��ϵͳ?serverTimezone=GMT%2B8","root","1234");
			Statement stmt = connect.createStatement();
			ResultSet rs = stmt.executeQuery("select * from class");
            //user Ϊ��������

			TextArea mess =new TextArea();
			   mess.setWrapText(true);
			   mess.setEditable(false);
			   mess.setPrefColumnCount(100);
			   mess.setPrefRowCount(100);	
			   
			   
			while (rs.next()) {
							
	mess.appendText(rs.getString("num")+" "+rs.getString("name")+" "+
	rs.getString("kcxz")+" "+rs.getString("zxs")+" "+rs.getString("skxs")
	+" "+rs.getString("syxs")+" "+rs.getString("xf")+" "+rs.getString("kkxq")+"\n");			
//System.out.println(rs.getString("num")+" "+rs.getString("name")+" "+rs.getString("kcxz")+" "+rs.getString("zxs")+" "+rs.getString("skxs")+" "+rs.getString("syxs")+" "+rs.getString("xf")+" "+rs.getString("kkxq"));
}
   
   HBox hbox=new HBox();
   ScrollPane sp =new ScrollPane(mess);
   sp.setMaxSize(500, 500);
   hbox.getChildren().addAll(sp);
   hbox.setAlignment(Pos.CENTER);
   Scene scene=new Scene(hbox,800,400);
   Stage stage =new Stage();
	stage.setTitle("�������");
	stage.setScene(scene);
	stage.showAndWait();	
		
		}
catch (Exception e) {
System.out.print(e);

}
 
	

	}

	private void input() {
		// TODO �Զ����ɵķ������
		GridPane pane =new GridPane();
		pane.setAlignment(Pos.CENTER);
		pane.setPadding(new Insets(111.2,121.5,131.5,141.5));
		pane.setHgap(5.5);
		pane.setVgap(5.5);
		
		pane.add(new Label("�γ̱��:"),0,1);
		pane.add(num4,1,1);
		pane.add(new Label("�γ�����:"),0,2);
		pane.add(num5,1,2);
		pane.add(new Label("�γ�����:"),0,3);
		pane.add(num6,1,3);
		pane.add(new Label("��ѧʱ:"),0,4);
		pane.add(num7,1,4);
		pane.add(new Label("�ڿ�ѧʱ:"),0,5);
		pane.add(num8,1,5);
		pane.add(new Label("ʵ��ѧʱ:"),0,6);
		pane.add(num9,1,6);
		pane.add(new Label("�γ�ѧ��:"),0,7);
		pane.add(num10,1,7);
		pane.add(new Label("����ѧ��:"),0,8);
		pane.add(num11,1,8);
		Button btcancle =new Button("����");
		btcancle.setOnAction(e->menu());
		pane.add(btcancle,2,9);
		Button btsure =new Button("ȷ��");
		btsure.setOnAction(e->sure());
		pane.add(btsure,3,9);
		
		Scene scene =new Scene(pane);
		Stage stage =new Stage();
		stage.setTitle("¼��ͼ��");
		stage.setScene(scene); 
		stage.show();
	}
public static void main(String[] args) 
{
Application.launch(args);	
} 
}