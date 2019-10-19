package lab2;

import java.io.Serializable;

public class Student implements Serializable{
    private int number;
    private String name;
    
	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Student [number=" + number + ", name=" + name + "]";
	}

	public Student(int number, String name) {
		this.number = number;
		this.name = name;
	}
    
}
