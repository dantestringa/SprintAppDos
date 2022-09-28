
import { Router } from 'express'
import {
    homeTarea,
    recibirTarea,
    agregarTarea,
    eliminarTarea,
    tareaId,
    editarTarea
    
} from '../controllers/tareasControler.js'

export const router = Router()

router.get('/', homeTarea)
router.get('/listaTareas', recibirTarea) 
router.post('/addTareas', agregarTarea)
router.delete('/eliminar/:id', eliminarTarea)
router.get('/tareas/:id', tareaId) 
router.put('/editar/:id', editarTarea)
