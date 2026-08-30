# FishOnMC Rustic Fantasy 128 — Fish Only

An unofficial 128px replacement texture pack for FishOnMC fish. It contains fish artwork only: no rods,
reels, lines, bait, armor, menus, cosmetics, or other item replacements.

This project is not affiliated with or endorsed by FishOnMC, Mojang, or Microsoft.

## Contents

- 3,471 fish textures;
- 347 fish identifiers;
- normal, albino, alternate, fabled, frozen, locked, melanistic, spooky, trophy, and zombie folders;
- two small generated-item model definitions repairing missing Fabled Common Remora and Meanmouth Bass
  routes in the compatible official-pack snapshot.

The textures use a semi-realistic Rustic Fantasy direction while retaining hard pixel edges, readable
silhouettes, transparent backgrounds, and Minecraft-compatible presentation.

## Installation

1. Download the release ZIP.
2. Put the ZIP in the selected Minecraft instance's `resourcepacks` directory.
3. Open Minecraft's Resource Packs screen and enable **Rustic Fantasy 128 — Fish Only**.
4. Keep it above the official FishOnMC/repaired texture pack in the priority list.
5. Reload resources or restart Minecraft.

If default fish sprites still appear, confirm this pack is at the highest applicable priority. The pack
expects FishOnMC's normal item-model routing and replaces only the textures those routes select.

## Complementary true-size mod

This pack is designed to complement
[FishOn Fish Scale](https://github.com/finalpantasy/fishon-fish-scale), an optional client-only Fabric mod
that renders caught fish at their recorded physical length while preserving normal inventory icon size.

- The texture pack improves how the fish look.
- FishOn Fish Scale changes only their client-side world-render size.
- Either project works independently; using both provides the intended visual experience.

## Scope and provenance

The public repository contains only the fish texture tree, its pack metadata/icon, and two minimal model
route repairs. It does not contain downloaded FishOnMC server packs, original official texture files,
research archives, worlds, logs, account information, or the unreleased rod/item replacement work.

A pre-publication SHA-256 comparison found zero byte-identical matches between these 3,471 PNG files and
the 2,431 fish PNG hashes in the locally cached official-pack snapshot. See [RIGHTS.md](RIGHTS.md) for the
artwork and compatibility notice.

## Development disclosure

`finalpantasy` directed the art style, selected and rejected generations, corrected transparency,
specified orientation and inventory fill, tested the textures in Minecraft, and approved the release.
OpenAI image and coding tools were used extensively to assist with image generation, processing,
documentation, and validation. The artwork is therefore shared on GitHub rather than Modrinth.

## License

The replacement artwork is shared under the terms in [LICENSE.md](LICENSE.md). FishOnMC names, marks,
game content, and underlying designs remain the property of their respective owners.
