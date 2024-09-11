const Philatelist = require('../models/philatelistModel')

//creating a new user

const createPhilatelist = async(req,res)=>{
    try{
        const philatelist = await Philatelist.create(req.body);
        res.status(201).json(philatelist);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
};

const getPhilatelists = async(req,res)=>{
    try{
        const philatelists = await Philatelist.find();
        res.status(200).json(philatelists);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

const getPhilatelistById = async(req,res)=>{
    try{
        const philatelist = await Philatelist.findById(req.params.id);
        if (!philatelist){
            return res.status(404).json({message:"Philatelist not found"});
        }
        res.status(200).json(philatelist);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

const updatePhilatelist = async(req,res)=>{
    try{
        const philatelist = await Philatelist.findByIdAndUpdate(req.params.id, req.body, {
            new:true, runValidators:true,
        });
        if (!philatelist){
            return res.status(404).json({message:"Philatelist not found"});
        }
        res.status(200).json(philatelist);

    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

const deletePhilatelist = async(req,res)=>{
    try{
        const philatelist = await Philatelist.findByIdAndDelete(req.params.id, req.body, {
            new:true, runValidators:true,
        });
        if (!philatelist){
            return res.status(404).json({message:"Philatelist not found"});
        }
        res.status(200).json({message:'philatelist deleted successfully'});

    }
    catch(error){
        res.status(500).json({message:error.message});
    }

};

module.exports = {createPhilatelist, getPhilatelists, getPhilatelistById,
    updatePhilatelist, deletePhilatelist,
}


