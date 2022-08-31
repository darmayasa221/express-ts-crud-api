export {};
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HOST:string;
      PORT:number;
      MONGO_URI:string;
    }
  }
}