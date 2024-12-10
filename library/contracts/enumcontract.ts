export namespace Sandbox {

    export namespace Contracts{
        export interface EnumContract {

            Name : string;
            Price : number;
            Qty: number;
            Total(): number;
            Print() :void;

        }
    }


}