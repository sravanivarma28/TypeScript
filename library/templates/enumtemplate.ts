///<reference path = "../contracts/enumcontract.ts"/>

import { Sandbox } from "../contracts/enumcontract";

export namespace SandBox{

    export namespace Templates {
     export   abstract class  EnumTemplate implements Sandbox.Contracts.EnumContract{

     Name = '';
     Price = 0;
     Qty  = 0;
    public abstract Total() : number;
    public abstract Print() : void;
                
            }

        }
}