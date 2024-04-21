import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './interface/todo';
import { todoListMockup } from './mock/todo.mock';

@Injectable()
export class TodoService {
  create(createTodoDto: CreateTodoDto) {
    try {
      const todoId =
        todoListMockup.length > 0
          ? todoListMockup[todoListMockup.length - 1].todoId + 1
          : 1;

      const newTodo: Todo = {
        todoId,
        ...createTodoDto,
      };
      todoListMockup.push(newTodo);

      return { message: 'Todo created successfully', data: newTodo };
    } catch (error) {
      throw new HttpException(
        'Todo creation failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  findAll(): Todo[] {
    return todoListMockup;
  }

  findOne(id: number): Todo {
    const todo = todoListMockup.find((todo) => todo.todoId === id);
    if (!todo) {
      throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
    }
    return todo;
  }

  update(id: number, updateTodoDto: UpdateTodoDto): Todo {
    const index = todoListMockup.findIndex((todo) => todo.todoId === id);
    if (index === -1) {
      throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
    }
    todoListMockup[index] = {
      ...todoListMockup[index],
      ...updateTodoDto,
    };
    return todoListMockup[index];
  }

  remove(id: number): Todo {
    const index = todoListMockup.findIndex((todo) => todo.todoId === id);
    if (index === -1) {
      throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
    }
    const removedTodo = todoListMockup.splice(index, 1)[0];
    return removedTodo;
  }
}
