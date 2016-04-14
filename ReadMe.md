This is a windows-specific standalone camera mouse using the facetrackerLK plugin of [AsTeRICS]  (https://github.com/asterics/AsTeRICS) with support for the nexus.

The BuildingBlock demonstrates a deep integration with the [Bootstrap carousel plugin](http://getbootstrap.com/javascript/#carousel).

For general information about the organization of the whole repository, read the top-level [README file](https://github.com/asterics/P4AllBuildingBlocks/blob/master/README.md).

## Prerequisites and build instructions
You can build this building block as a standalone demo application with [APE](https://github.com/asterics/P4AllBuildingBlocks/wiki/AsTeRICS-Packaging-Environment-(APE)).

Add this BuildingBlock by calling
```sh
git clone git@github.com:asterics/P4AllBuildingBlocks.git
cd P4ABuildingBlocks/CameraInput
git submodule add git@github.com:riedel/FacetrackerLK-nexus.git
```

Please read the [prerequisites] (https://github.com/asterics/P4AllBuildingBlocks/blob/master/README.md#install-and-build-instructions-of-prerequisites) and [build instructions](https://github.com/asterics/P4AllBuildingBlocks#creating-single-camera-mouse-demo-with-ape-copy) for single demos.

For the demo to work you should also have a website that uses Bootstrap and features a carousel component.

## Use in your website
Add the following line to your website 
```html
<script src="https://cdn.rawgit.com/riedel/FacetrackerLK-nexus/master/js/asterics-slidecontrol.js"></script>
```

## Licenses
The building blocks are dual licensed. You can choose between MIT or GPLv3 license depending on the selected set of plugins, services and libraries you want to use. Please read the [license section in the wiki](https://github.com/asterics/P4AllBuildingBlocks/wiki#license) for more information.
