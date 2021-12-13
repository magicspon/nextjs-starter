---
to: src/containers/<%= h.changeCase.pascalCase(name) %>/index.ts
---

export { default, use<%= h.changeCase.pascalCase(name)  %>State, use<%= h.changeCase.pascalCase(name)  %>Dispatch, use<%= h.changeCase.pascalCase(name)  %> } from './<%= h.changeCase.pascalCase(name) %>Provider'
