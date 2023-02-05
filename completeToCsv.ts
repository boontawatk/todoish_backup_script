import dotenv from 'dotenv'
dotenv.config()
import axios, { AxiosResponse } from "axios";
import ObjectsToCsv from "objects-to-csv";
import { CompleteResponse } from "./type";
import dayjs from 'dayjs';
import { formatData } from './formatData';

const getCompleteTaskToCsv = async()=>{
  try{
    //start last week, end today
    const end = dayjs().startOf('day')
    const start = end.subtract(7,'day')

    const endDateFormat = end.format('YYYY-MM-DDTHH:mm')
    const startDateFormat = start.format('YYYY-MM-DDTHH:mm')
    console.log(`since : ${startDateFormat}`)
    console.log(`until : ${endDateFormat}`)
    const config = {
      method: 'get',
      url: `https://api.todoist.com/sync/v9/completed/get_all?limit=200&since=${startDateFormat}&until=${endDateFormat}`,
      headers: { 
        'Authorization': `Bearer ${process.env.todoistToken}`, 
      }
    };
    const res = await axios<any,AxiosResponse<CompleteResponse>>(config)
    
    const {data} = res
    const formattedData = formatData(data)
    const csv = new ObjectsToCsv(formattedData)
    await csv.toDisk('./generated/weeklyCompleteTask.csv');
  }
  catch(e){
    console.log(e)
  }
}
getCompleteTaskToCsv()