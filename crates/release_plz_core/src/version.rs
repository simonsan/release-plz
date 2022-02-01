use cargo_metadata::Version;
use next_semver::NextVersion;

use crate::diff::Diff;

pub(crate) trait NextVersionFromDiff {
    /// Analyze commits and determine which part of version to increment based on
    /// [conventional commits](https://www.conventionalcommits.org/)
    fn next_from_diff(&self, diff: &Diff) -> Self;
}

impl NextVersionFromDiff for Version {
    fn next_from_diff(&self, diff: &Diff) -> Self {
        if !diff.should_update_version() {
            self.clone()
        } else {
            self.next(&diff.commits)
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn next_version_of_new_package_is_unchanged() {
        let remote_package_exists = false;
        let diff = Diff::new(remote_package_exists);
        let version = Version::new(1, 2, 3);
        assert_eq!(version.clone().next_from_diff(&diff), version);
    }

    #[test]
    fn next_version_of_existing_package_is_updated() {
        let diff = Diff {
            remote_package_exists: true,
            commits: vec!["my change".to_string()],
        };
        let version = Version::new(1, 2, 3);
        assert_eq!(version.next_from_diff(&diff), Version::new(1, 2, 4));
    }
}
