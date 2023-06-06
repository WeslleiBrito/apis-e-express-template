import express, { Request, Response } from 'express'
import { courses, students } from './database'

import cors from 'cors'
import { TCourse, TStudent } from './types'
import { COURSE_STACK } from './types'
import { log } from 'console'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get('/', (req: Request, res: Response) => {
   res.send("Api em funcionamento!")
})

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
})

app.get('/courses', (req: Request, res: Response) => {
    res.status(200).send(courses)
})

app.get('/courses/search', (req: Request, res: Response) => {
    const  name = req.query.name as string

    const result = courses.filter((course) => {
        return course.name.toLowerCase().includes(name.toLowerCase())
    })

    res.status(200).send(result)
})

app.post('/courses', (req: Request, res: Response) => {
    const {id, name, lessons, stack} = req.body

    if(stack !== COURSE_STACK.BACK && stack !== COURSE_STACK.FRONT){
        res.status(403).send("Stack Invalida!")
    }

    const newCourse: TCourse = {
        id,
        name,
        lessons,
        stack

    }

    courses.push(newCourse)
    res.status(201).send("Cadastro realizado com sucesso!")
    console.log(courses)
})

// Pegar todos os estudantes

app.get('/students', (req: Request, res: Response) => {
    
    res.status(200).send(students)
})


app.post('/students', (req: Request, res: Response) => {
    const { id, name, age } = req.body

    const newStudent: TStudent = {
        id,
        name,
        age
    }

    students.push(newStudent)

    res.status(201).send("Novo estudante cadastrado com sucesso!")
})

app.get('/students/search', (req: Request, res: Response) => {
    const name = req.query.name as string

    const result = students.filter((student) => {
        return student.name.toLowerCase().includes(name.toLowerCase())
    })

    res.status(200).send(result)
})