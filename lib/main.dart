
import 'package:flutter/material.dart';
import 'package:project/todoList.dart';

void main() => runApp(Project());
class Project extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: TodoList(),
    );
  }
}