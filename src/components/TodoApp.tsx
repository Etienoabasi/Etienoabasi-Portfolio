import { useState } from "react";
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, GripVertical, Check, X, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
}

interface SortableItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const SortableItem = ({ todo, onToggle, onDelete }: SortableItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: todo.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const priorityColors = {
    low: 'bg-green-500/10 text-green-700 border-green-500/20',
    medium: 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20',
    high: 'bg-red-500/10 text-red-700 border-red-500/20'
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`${isDragging ? 'opacity-50' : 'opacity-100'}`}
    >
      <Card className={`mb-3 transition-all duration-200 hover:shadow-md ${
        todo.completed ? 'bg-muted/50' : 'bg-card'
      }`}>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <button
              className="cursor-grab active:cursor-grabbing text-muted-foreground hover:text-foreground"
              {...attributes}
              {...listeners}
            >
              <GripVertical className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => onToggle(todo.id)}
              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                todo.completed 
                  ? 'bg-primary border-primary text-primary-foreground' 
                  : 'border-muted-foreground hover:border-primary'
              }`}
            >
              {todo.completed && <Check className="w-3 h-3" />}
            </button>

            <span className={`flex-1 ${todo.completed ? 'line-through text-muted-foreground' : ''}`}>
              {todo.text}
            </span>

            <Badge className={`text-xs ${priorityColors[todo.priority]}`}>
              {todo.priority}
            </Badge>

            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              {todo.createdAt.toLocaleDateString()}
            </div>

            <button
              onClick={() => onDelete(todo.id)}
              className="text-muted-foreground hover:text-destructive transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: '1',
      text: 'Design portfolio layout',
      completed: false,
      priority: 'high',
      createdAt: new Date('2024-01-15')
    },
    {
      id: '2',
      text: 'Implement drag and drop functionality',
      completed: false,
      priority: 'medium',
      createdAt: new Date('2024-01-16')
    },
    {
      id: '3',
      text: 'Add responsive design',
      completed: true,
      priority: 'high',
      createdAt: new Date('2024-01-17')
    },
    {
      id: '4',
      text: 'Write documentation',
      completed: true,
      priority: 'low',
      createdAt: new Date('2024-01-18')
    }
  ]);
  
  const [newTodo, setNewTodo] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const { toast } = useToast();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setTodos((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);
        
        toast({
          title: "Task reordered",
          description: "Your tasks have been rearranged successfully.",
        });

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const addTodo = () => {
    if (newTodo.trim()) {
      const newTask: Todo = {
        id: Date.now().toString(),
        text: newTodo.trim(),
        completed: false,
        priority,
        createdAt: new Date()
      };
      
      setTodos([...todos, newTask]);
      setNewTodo('');
      
      toast({
        title: "Task added",
        description: `"${newTask.text}" has been added to your list.`,
      });
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
    
    const todo = todos.find(t => t.id === id);
    if (todo) {
      toast({
        title: todo.completed ? "Task unmarked" : "Task completed",
        description: `"${todo.text}" has been ${todo.completed ? 'marked as pending' : 'completed'}.`,
      });
    }
  };

  const deleteTodo = (id: string) => {
    const todo = todos.find(t => t.id === id);
    setTodos(todos.filter(todo => todo.id !== id));
    
    if (todo) {
      toast({
        title: "Task deleted",
        description: `"${todo.text}" has been removed from your list.`,
        variant: "destructive"
      });
    }
  };

  const activeTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 rounded-lg text-white min-h-[600px]">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-wider mb-2">TASKIFY</h1>
        <p className="text-blue-100 opacity-90">
          Organize your tasks with drag-and-drop functionality
        </p>
      </div>

      {/* Add Task Input */}
      <div className="mb-8">
        <div className="flex gap-3 max-w-2xl mx-auto">
          <div className="flex-1 relative">
            <Input
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Enter a task"
              onKeyDown={(e) => e.key === 'Enter' && addTodo()}
              className="h-12 text-lg bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-300 rounded-full px-6"
            />
          </div>
          
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
            className="px-4 py-3 border rounded-full bg-gray-800/50 border-gray-600 text-white text-sm"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          
          <Button 
            onClick={addTodo} 
            size="lg"
            className="rounded-full bg-blue-500 hover:bg-blue-400 text-white px-8"
          >
            Go
          </Button>
        </div>
      </div>

      {/* Task Columns */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Active Tasks Column */}
        <div className="bg-teal-500 rounded-lg p-6 min-h-[400px]">
          <h2 className="text-2xl font-bold mb-4 text-white">Active Tasks</h2>
          
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext items={activeTodos} strategy={verticalListSortingStrategy}>
              <div className="space-y-3">
                {activeTodos.map(todo => (
                  <div key={todo.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <button
                        className="cursor-grab active:cursor-grabbing text-white/70 hover:text-white"
                        {...useSortable({ id: todo.id }).attributes}
                        {...useSortable({ id: todo.id }).listeners}
                      >
                        <GripVertical className="w-4 h-4" />
                      </button>
                      
                      <button
                        onClick={() => toggleTodo(todo.id)}
                        className="w-5 h-5 rounded border-2 border-white/50 hover:border-white transition-colors"
                      />

                      <span className="flex-1 text-white">{todo.text}</span>

                      <Badge className={`text-xs ${
                        todo.priority === 'high' ? 'bg-red-500/20 text-red-200 border-red-300/30' :
                        todo.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-200 border-yellow-300/30' :
                        'bg-green-500/20 text-green-200 border-green-300/30'
                      }`}>
                        {todo.priority}
                      </Badge>

                      <button
                        onClick={() => deleteTodo(todo.id)}
                        className="text-white/70 hover:text-red-300 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </SortableContext>
          </DndContext>

          {activeTodos.length === 0 && (
            <div className="text-center py-12 text-white/70">
              <p>No active tasks. Add one above!</p>
            </div>
          )}
        </div>

        {/* Completed Tasks Column */}
        <div className="bg-red-500 rounded-lg p-6 min-h-[400px]">
          <h2 className="text-2xl font-bold mb-4 text-white">Completed Tasks</h2>
          
          <div className="space-y-3">
            {completedTodos.map(todo => (
              <div key={todo.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className="w-5 h-5 rounded border-2 bg-white border-white flex items-center justify-center"
                  >
                    <Check className="w-3 h-3 text-red-500" />
                  </button>

                  <span className="flex-1 text-white line-through opacity-75">{todo.text}</span>

                  <div className="flex items-center gap-1 text-xs text-white/60">
                    <Clock className="w-3 h-3" />
                    {todo.createdAt.toLocaleDateString()}
                  </div>

                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-white/70 hover:text-red-300 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {completedTodos.length === 0 && (
            <div className="text-center py-12 text-white/70">
              <p>No completed tasks yet!</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 text-center text-blue-100/70 text-sm">
        💡 Drag tasks in Active column to reorder • Click circles to mark complete/incomplete
      </div>
    </div>
  );
};

export default TodoApp;