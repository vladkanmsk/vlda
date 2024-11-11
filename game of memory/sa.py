import turtle

screen = turtle.Screen()
screen.bgcolor('black')
turtle1 = turtle.Turtle()
turtle1.speed(0)
turtle1.color('red')

turtle1.penup()
turtle1.goto(-200,-150)
turtle1.pendown()
def sierpinski_triangle(turtle1, length, depth):
    if depth == 0:
        for _ in range(3):
            turtle1.forward(length)
            turtle1.left(120)
        
    else:
        sierpinski_triangle(turtle1, length / 2, depth - 1)
        turtle1.forward(length / 2)
       
        sierpinski_triangle(turtle1, length / 2, depth - 1)
        turtle1.backward(length / 2)
        turtle1.left(60)
        turtle1.forward(length / 2)
        turtle1.right(60)
       
        sierpinski_triangle(turtle1, length / 2, depth - 1)
        turtle1.left(60)
        turtle1.backward(length / 2)
        turtle1.right(60)

sierpinski_triangle(turtle1,1000,6)
screen.mainloop()

