import dotenv from 'dotenv'
dotenv.config()
import axios, { AxiosResponse } from "axios";
import ObjectsToCsv from "objects-to-csv";
import { CompleteResponse } from "./type";

const config = {
  method: 'get',
  url: 'https://api.todoist.com/sync/v9/completed/get_all?limit=200',
  headers: { 
    'Authorization': `Bearer ${process.env.todoistToken}`, 
  }
};

const getCompleteTaskToCsv = async()=>{
  try{
    const res = await axios<any,AxiosResponse<CompleteResponse>>(config)
    const data = res.data.items
    const csv = new ObjectsToCsv(data)
    await csv.toDisk('./weeklyCompleteTask.csv');
  }
  catch(e){
    console.log(e)
  }
}
getCompleteTaskToCsv()