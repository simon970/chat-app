"use client"
import Image, { type ImageProps } from "next/image";

import styles from "./page.module.css";
import {TextInput} from "@repo/ui/text-input"
import { Button } from "@repo/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [room,setRoomId] = useState("");
  const router = useRouter();
  return (
    <div style={{ 
      height:"100vh",
      width:"100vw",
      display:"flex",
      justifyContent:"center",
      justifyItems:"center",
      backgroundColor:"black",
      alignItems:"center"

    }}>
      <div>
      <TextInput onChange={(e)=>{
      setRoomId(e.target.value);
 }} placeholder="roomid" size="small"/>
     <Button onClick={()=>{
      router.push(`/chat/${room}`)
     }} children="Join Room" className="Room" appName="Chat"/>
      </div>
    
    </div>
  );
}
