<div>
  <h1 align="center">OSR Generators</h1>
  <strong>
    A collection of tools and generators for <a href="https://en.wikipedia.org/wiki/Old_School_Renaissance">OSR-style</a> TTRPG
  </strong>

  <div
    style="display: flex; flex-wrap: wrap;justify-content: space-evenly; align-items: center; background-color: #ffe647; padding: 10px 10px;"
  >
    <img
        style="width: 180px; background: transparent"
        alt="OSR logo"
        src="docs/images/osr-logo.png"
    />
    <a href="https://necroticgnome.com/">
      <img
        style="width: 200px"
        alt="Designed for use with Old-School Essentials"
        src="docs/images/use-with-OSE.png"
      />
    </a>
      <a href="https://cairnrpg.com/">
      <img
        style="width: 200px"
        alt="For use with Cairn"
        src="docs/images/use-with-Cairn.jpg"
      />
    </a>
      <a href="https://morkborg.com/">
      <img
        style="width: 200px; background: transparent"
        alt="Compatible with Mork Borg"
        src="docs/images/compatible-with-Mork-Borg-vert.svg"
      />
    </a>
    <a href="https://www.thearcanelibrary.com/pages/shadowdark">
      <img
        style="width: 325px; background: transparent"
        alt="Designed for use with Shadowdark RPG"
        src="docs/images/Third_Party_Shadowdark_Logo_Black.png"
      />
    </a>
  </div>
</div>

<hr />

## Suppport

- [x] Knave 1e
- [ ] Knave 2e
- [ ] OSE
- [ ] Basic Fantasy RPG
- [ ] Outcast Silver Raiders
- [ ] Cairn
- [ ] Mork Borg
- [ ] Shadowdark

# Usage

**Install**

```shell
npm i osr-generators
```

**Create a Knave character**

```typescript
import { KnaveCharacter } from 'osr-generators'

// Generate a new character
const character = new KnaveCharacter()

// Regenerate character
character.generate()

// Regenerate traits only
character.generateTraits()
```

# Contributing

## Prerequisites

- [asdf version manager](https://asdf-vm.com/)
- [asdf nodejs plugin](https://github.com/asdf-vm/asdf-nodejs)
- [yarn](https://yarnpkg.com/)

## Install nodejs

Use `asdf` to install the node version listed in `.tool-verisons`

```shell
asdf install
```

## Install dependencies

```shell
yarn
```

### Testing

Tests are written using [Vitest](https://vitest.dev/) and can be run with `yarn test`
