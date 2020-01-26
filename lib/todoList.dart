import 'package:flutter/material.dart';
import 'todo.dart';

class TodoList extends StatefulWidget {
  @override
  _TodoListState createState() => _TodoListState();
}

class _TodoListState extends State<TodoList> {
  // Array list
  List<Todo> listOfTodos = [];
  TextEditingController controller = TextEditingController();
  _toggleTodo(Todo todo, bool isChecked) {
    setState(() {
      todo.isDone = isChecked;
    });
  }

  Widget _bulidItem(BuildContext context, int index) {
    final todo = listOfTodos[index];
    return CheckboxListTile(
      value: todo.isDone,
      title: Text(todo.title),
      onChanged: (bool isChecked) {
        _toggleTodo(todo, isChecked);
      },
    );
  }

  _addTodo() { // add todo
    showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog( // alert dialog
            title: Text("New todo"),
            content: TextField(
              controller: controller,
              autofocus: true,
            ),
            actions: <Widget>[
              MaterialButton(
                child: Text("Cancel"),
                onPressed: () {
                  Navigator.of(context).pop();
                },
              ),
              MaterialButton(
                child: Text("Add"),
                onPressed: () {
                  setState(() {
                    final todo = new Todo(title: controller.value.text);
                    if (controller.value.text == "") {
                      print(" ");
                    } else {
                      listOfTodos.add(todo);
                    }
                    controller.clear();
                    Navigator.of(context).pop();
                  });
                },
              ),
            ],
          );
        });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Todo List"),
      ),
      body: ListView.builder(
        itemBuilder: _bulidItem,
        itemCount: listOfTodos.length,
      ), 
      floatingActionButton: FloatingActionButton( // action button
        child: Icon(Icons.add),
        onPressed: _addTodo,
      ),
    );
  }
}