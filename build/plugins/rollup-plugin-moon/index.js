import { SplitCode } from "./splitCode";
import { format } from "esformatter";
import * as ts from "typescript";
import TransformRender from "./trasformToRender";

export default function byy (options) {
  let regExp = /\.moon$/;

  return ({
    name: "moon",

    transform(code, id) {
      if (!regExp.test(id)) return null;
      
      let { template, script} = new SplitCode(code);

      // let test = ts.transpileModule(script, {
      //   compilerOptions: {
      //     module: ts.ModuleKind.UMD,
      //     target: ts.ScriptTarget.ES5,
      //     esModuleInterop: false,
      //     strict: false,
      //     lib: [
      //       ts.ScriptTarget.ES5,
      //       ts.ScriptTarget
      //     ]
      //   }
      // });

      // console.log("sss", test.outputText);

      let renderTransformer = new TransformRender(template);
      
      return script;
    }
  });
}