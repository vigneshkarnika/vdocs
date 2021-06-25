# Dart

### Setup
```bash
export PATH=$PATH:/Users/vigneshstreamoid/Documents/development/dart-sdk/bin
```
or can use Online Dart Pad

---
### Comment
create main.dart
```js
main() {
  print("hello");
}
//this is comment
  /* multilines
   *
   *
   *
   *
   */
```
```bash
dart main.dart
dart2js --out=output.js main.dart
```
---
### Variables
```dart
  void main() {
  var name = "vignesh";
  var roll = 78;
  int rollno = 34;
  double percentage = 45.89;
  num intdouble = 89.891;
  print(intdouble);
  print(name.runtimeType);
  print(roll.runtimeType);
  print(rollno.runtimeType);
  print(percentage.runtimeType);
  print(intdouble.runtimeType);

  String firstname = "vig";
  String lastname = "kar";
  String age = "30";
  int parsedage = int.parse(age);
  print(parsedage.runtimeType);
  String parsedStrage = parsedage.toString();
  print(parsedStrage.runtimeType);

  print(firstname.toUpperCase());
  print(firstname.split("i"));
  print("myname is "+firstname+" "+lastname);
  print("myname is $firstname $lastname");
  print("myname is ${firstname.toUpperCase()} ${lastname.toUpperCase()}");

  bool isHuman=true;
  bool isAnimal=false;
  print(isHuman);

  List a=[1,2,3,4];
  List b=[1,"2",3.90,"test"];
  print(a);
  print(b);
  print(a.runtimeType);
  print(b.runtimeType);
  b.add("anotherval");
  b.add(34);
  print(b);

  b.insert(2,"newval");
  print(b);

  b.insertAll(3,a);
  print(b);
  b[3]="changed";
  print(b);
  print(b[4]);
  print(b.length);


  Map mymap={"name":"vignesh","age":30};
  print(mymap);
  print(mymap.keys);
  print(mymap.values);
  print(mymap["name"]);

  final time=new DateTime.now();
  const gravity=9.8;
  // this is not possible because const should have value during compile time
  //const gravtime=new DateTime.now();
  print(time);


  print(1*3*7);
  print(8%3);
  print(2-3);
  print(2==4);
  print(4!=9);
  print(7>8);


}


```
---
### Functions
```dart
void main() {
  print(printName("Vignesh","Karnika"));
}

printName(String firstname,String lastname){
  return firstname+" "+lastname;
}



void main() {
  print(getName("Vignesh"));
  print(getSimpleName("Vignesh"));
}

String getName(String name){
  return name.toUpperCase();
}

String getSimpleName(String name)=>name;
```
---
### Control Statements
```dart
void main() {
  // as is is!
  num age=30.01;
  print(age is String);
  print(age is! String);
  if(age>5){
    print("age is greater than 5");
  }else{
    print("age is less than 5");
  }
}

```
---
### Loops
```dart
void main() {
  for(int i=0;i<90;i++){
    print("this is $i");
  }
}

void main() {
  var i=100;
 while(i>1){
   print(i);
   i--;
 }
}
void main() {
  var i = 100;
  do {
    print(i);
    i--;
  } while (i > 1);
}

void main() {
  var i = 101;
  switch (i) {
    case 100:
      print("it is 100");
      break;
    default:
      print("it is not 100");
      break;
  }
}

```
---
#### Optional Positional Arguments
```dart

void main() {
  getName("Vignesh");
  getNameAge("Vignesh","Karnika",23);
}

void getName(String firstname,[String lastname]){
  print(firstname);
  print(lastname);
}

void getNameAge(String firstname,[String lastname,int age]){
  print(firstname);
  print(lastname);
  print(age);
}
```

#### optional named parameter
```dart
void main() {
  getNameAge("Vignesh");
  getNameAge("Vignesh",lastname:"Kar");
  getNameAge("Vignesh",lastname:"Kar",age:30);
}

void getNameAge(String firstname,{String lastname,int age}){
  print(firstname);
  print(lastname);
  print(age);
}


//adding default value
  void main() {
  getNameAge("Vignesh");
  getNameAge("Vignesh",lastname:"Kar");
  getNameAge("Vignesh",lastname:"Kar",age:30,roll:78);
}

void getNameAge(String firstname,{String lastname,int age,int roll=56}){
  print(firstname);
  print(lastname);
  print(age);
  print(roll);
}

```

string.isNotEmpty
string.Contains

---
### Object Oriented Programming

```dart
void main() {
  MaruthiCar mc=new MaruthiCar("red",true);
  print(mc.getMfdInfo());
  MaruthiCar mc1=new MaruthiCar.named();
  print(mc1.getMfdInfo());
  MaruthiCar mc2=new MaruthiCar.topEnd();
  print(mc2.getMfdInfo());
  HyundaiCarNew hcn=new HyundaiCarNew();
  hcn.mytorque=67;
  print(hcn.mytorque);

}

class MaruthiCar{
  String color;
  bool withAC;
  MaruthiCar(String color,bool withAC){
    this.color=color;
    this.withAC=withAC;
  }
   MaruthiCar.named(){
    color="black";
    withAC=false;
  }
   MaruthiCar.topEnd(){
    color="black";
    withAC=true;
  }
  String getMfdInfo(){
    return "${this.color} Color Car with AC ${this.withAC} 2019";
  }
}

class HyundaiCar{
   String color;
  bool withAC;
  HyundaiCar(this.color,this.withAC);
  String getMfdInfo(){
    return "${this.color} Color Car with AC ${this.withAC} 2019";
  }

  double torque;
  void set mytorque(double torque){
    torque=torque*1000;
  }
  double get mytorque{
    return torque;
  }


}
//custom getters and setters
class HyundaiCarNew{
   String color="red";
  bool withAC=true;

  int torque;
  void set mytorque(int tor){
    torque=tor*1000;
  }
  int get mytorque{
    return torque;
  }


}



main(){
  Student s=new Student(45);
  print("${s.name} ${s.age} ${s.roll}");

}


class Person{
  String name="Vignesh";
  int age=30;
}

class Student extends Person{
  int roll;
  Student(this.roll);
}


// we can ovveride method in student



main(){
  Student s=new Student("vignesh",30,89);
  print("${s.name} ${s.age} ${s.roll}");

}


class Person{
  String name;
  int age;
  Person(this.name,this.age);
}

class Student extends Person{
  int roll;
  Student(String name,int age,this.roll):super(name,age);
}


ShoppingListItem({Product product, this.inCart, this.onCartChanged})
     : product = product,
       super(key: ObjectKey(product));

```

```javascript
List<String> products = [
    "food tester",
    "food tester1",
  ];

products
.map((f) => Card(
   child: Column(
     children: <Widget>[
       Image.asset("assets/dummy.jpg"),
       Text(f)
     ],
   ),
 ))
.toList()

for (var product in products){

}

print("products list $products")
print("products list ${products.toString()}")
products.shuffle()
```

---
### Generics

```javascript
main(){
  var cSlot=Slot<Circle>();
 //error  cSlot.insert(Square());
  cSlot.insert(Circle());
}
class Circle{

}
class Square{

}

class Slot<T>{
  insert(T shape){

  }
}
```
---
### Mixins
Mixins are implicitly defined via ordinary class declarations:

```javascript
class Walker {
  void walk() {
    print("I'm walking");
  }
}
```

If we want to prevent our mixin to be instantiated or extended, we can define it like that:

```javascript
abstract class Walker {
  // This class is intended to be used as a mixin, and should not be
  // extended directly.
  factory Walker._() => null;

  void walk() {
    print("I'm walking");
  }
}


class Cat extends Mammal with Walker {}

class Dove extends Bird with Walker, Flyer {}

main(List<String> arguments) {
  Cat cat = Cat();
  Dove dove = Dove();

  // A cat can walk.
  cat.walk();

  // A dove can walk and fly.
  dove.walk();
  dove.fly();

  // A normal cat cannot fly.
  // cat.fly(); // Uncommenting this does not compile.
}
```
---
### Abstract Classes
An abstract class is a type of class that cannot be instantiated directly which means an object cannot be created from it.
An abstract class cannot be instantiated but they can be sub-classed.

```javascript
abstract class Person {
   // Body of abstract class
void talk (); // Abstract method
void walk (); // Abstract method
}

class Jay extends Person{
  @override
  void walk() {
    print("Jay can walk");
  }
@override
  void talk() {
    print("Jay can talk");
  }
}
main(){
  Jay jay = new Jay();
jay.talk();
  jay.walk();
}
```
---
### Interfaces
An interface enforces that a class implements a set list of public fields and methods.

```javascript
class Person {

  void walk() {
    print("Person can walk");
  }

  void talk() {
    print("Person can talk");
  }
}
class Jay implements Person {

  @override
  void walk() {
    print("Jay can walk");
  }

  @override
  void talk() {
    print("Jay can talk");
  }
}

main() {
  Person person = new Person();
  Jay jay = new Jay();

  person.walk();
  person.talk();

  jay.walk();
  jay.talk();
}



class Person {
  String name;

  void ShowName() {
    print("My name is $name");
  }

  void walk() {
    print("Person can walk");
  }

  void talk() {
    print("Person can talk");
  }
}

class Viveki {
  String profession;

  void ShowProfession() {
    print("from class Viveki my profession is $profession");
  }
}

class Jay implements Person, Viveki {
  @override
  String profession;

  @override
  void ShowProfession() {
    print("from class Jay my Profession is $profession");
  }
@override
  String name;

  @override
  void ShowName() {
    print("From class Jay my name is $name");
  }

  @override
  void walk() {
    print("Jay can walk");
  }

  @override
  void talk() {
    print("Jay can talk");
  }
}

main() {
  Person person = new Person();
  Jay jay = new Jay();
  Viveki viveki = new Viveki();

  person.walk();
  person.talk();
  person.name = "Person";
  person.ShowName();
 
  print("");

  jay.walk();
  jay.talk();
  jay.name = "JAY";
  jay.profession = "Software Development";
  jay.ShowProfession();
  jay.ShowName();

  print("");

  viveki.profession = "Chemical Engineer";
  viveki.ShowProfession();
}
Output
Person can walk
Person can talk
My name is Person

Jay can walk
Jay can talk
from class Jay my Profession is Software Development
From class Jay my name is JAY

from class Viveki my profession is Chemical Engineer
```
