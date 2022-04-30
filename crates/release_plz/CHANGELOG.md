# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.4] - 2022-04-27

### Added
- add `release` command (#89)
- *(cli)* forbid empty values in args (#88)

### Other
- *(args)* refactor (#87)

## [0.2.3] - 2022-04-23

### Added
- *(release-pr)* close old release-plz prs when running release-plz (#81)
- update Cargo.lock, too (#78)

## [0.2.2] - 2022-04-10

### Fixed
- remove all unwraps that are not in tests (#49)

## [0.2.1] - 2022-03-30

### Added
- support alternative registries (#34)

### Other
- update crate description

## [0.2.0] - 2022-03-27

### Added
- [**breaking**] generate changelog with git-cliff (#29)