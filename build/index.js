import { rollup, watch } from "rollup";
import { base, pages } from "./base";

async function build(name) {

  try {
    const bundle = await rollup(Object.assign({}, {
      plugins: base.plugins,
      input: `./src/js/pages/${name}.ts`
    }));
  
    bundle.generate(base.output(name)).then(() => {
      bundle.write(base.output(name));
    });
  } catch(err) {
    console.log(55555, err);
  }
  
}

for (let page of pages) build(page.name);