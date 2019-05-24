var StaticClass = function(){};
StaticClass.staicVariable = "staicVariable";
StaticClass.staicMethod = function(){
    console.log('模拟一下');
};

console.log(StaticClass.name);      //'staicVariable'
StaticClass.staicMethod(1,3);  //'模拟一下'