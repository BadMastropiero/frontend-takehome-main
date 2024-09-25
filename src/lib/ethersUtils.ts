import { ethers } from "ethers";
import strategyABI from "@/abi/IStrategy";
import { RPC_URL, tokenList } from "./constants";

const provider = new ethers.JsonRpcProvider(RPC_URL);

//TODO: Write a function to return the balance of a token for a given token
//TODO: Get price data
