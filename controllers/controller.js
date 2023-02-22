import Question from "../models/questionModel.js"
import Result from "../models/resultModel.js"
import questions, {answers} from '../data/data.js'

// Diplay all question

export const getQestion = async(req,res) => {
   try {
    const q = await Question.find()
    res.json(q)
   } catch (error) {
    res.json(error)
   }
}

//Post all question

export const postQuestion = async(req,res) => {
    try {
       await Question.insertMany({questions,answers}, function(err,data){
            res.json({msg:"Data successfully saved"})
        })
    } catch (error) {
        res.json(error)
    }
}

//Delete all question

export const deleteQuestion = async(req,res) => {
    try {
        await Question.deleteMany()
        res.json({msg:"Deleted Successfully"})
    } catch (error) {
        res.json("deleted Successfully")
    }
}


//GET ALL RESULT
export const getResult = async(req,res) => {
    try {
        const r = await Result.find()
        res.json(r)
    } catch (error) {
        res.json({error})
    }
}

// post all result 
export const postResult = async(req,res) =>{
    try {
        const {username,result,attempted,marks,status} = req.body;
        if(!username && !result) throw new Error("Data not provided!");
        Result.create({username,result,attempted,marks,status} ,function(err,data){
            res.json({msg:"Result saved Successfully"})
        })
    } catch (error) {
        res.json({error})
    }
}

// Delete all result 
export const deleteResult = async(req,res) => {
    try {
        await Result.deleteMany()
        res.json({msg:"Result Deleted Successfully"})
    } catch (error) {
        res.json({error})
    }
}