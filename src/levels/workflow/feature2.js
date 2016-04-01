exports.level = {
	"goalTreeString": "{\"branches\":{\"master\":{\"target\":\"C3\",\"id\":\"master\",\"remoteTrackingBranchID\":null},\"develop\":{\"target\":\"C9\",\"id\":\"develop\",\"remoteTrackingBranchID\":null},\"feature1\":{\"target\":\"C6\",\"id\":\"feature1\",\"remoteTrackingBranchID\":null},\"feature2\":{\"target\":\"C8\",\"id\":\"feature2\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C2\"],\"id\":\"C4\"},\"C6\":{\"parents\":[\"C4\"],\"id\":\"C6\"},\"C5\":{\"parents\":[\"C2\"],\"id\":\"C5\"},\"C7\":{\"parents\":[\"C5\"],\"id\":\"C7\"},\"C8\":{\"parents\":[\"C7\"],\"id\":\"C8\"},\"C9\":{\"parents\":[\"C6\",\"C8\"],\"id\":\"C9\"}},\"tags\":{\"v0\":{\"target\":\"C1\",\"id\":\"v0\"},\"v1\":{\"target\":\"C3\",\"id\":\"v1\"}},\"HEAD\":{\"target\":\"develop\",\"id\":\"HEAD\"}}",
	"solutionCommand": "git checkout -b feature1;git commit;git checkout develop;git checkout -b feature2;git commit;git checkout feature1;git commit;git checkout feature2;git commit;git commit;git checkout develop;git merge feature1;git merge feature2",
	"startTree": "{\"branches\":{\"master\":{\"target\":\"C3\",\"id\":\"master\",\"remoteTrackingBranchID\":null},\"develop\":{\"target\":\"C2\",\"id\":\"develop\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"}},\"tags\":{\"v0\":{\"target\":\"C1\",\"id\":\"v0\"},\"v1\":{\"target\":\"C3\",\"id\":\"v1\"}},\"HEAD\":{\"target\":\"develop\",\"id\":\"HEAD\"}}",
	"hint": {
		"en_US": "this will be the hint!"
	},
	"name": {
		"en_US": "feature2"
	},
	"startDialog": {
		"en_US": {
			"childViews": [
				{
					"type": "ModalAlert",
					"options": {
						"markdowns": [
							"## Develop two features parallel",
							"",
							"This tutorial shows how it works to develop two features parallel and finish them."
						]
					}
				},
				{
					"type": "GitDemonstrationView",
					"options": {
						"beforeMarkdowns": [
							"## Develop two features parallel",
							"",
							"We start the first feature, do something, start a second feature and do in both o them something. After the features are ready we finish them with a merge:"
						],
						"afterMarkdowns": [
							"... and now we have developed two features parallel and finished them with a merge into develop:",
							"",
							"    git checkout -b feature1",
							"",
							"    git commit",
							"",
							"    git checkout develop",
							"",
							"    git checkout -b feature2",
							"",
							"    git commit",
							"",
							"    git commit",
							"",
							"    git checkout feature1",
							"",
							"    git commit",
							"",
							"    git checkout develop",
							"",
							"    git merge feature1",
							"",
							"    git merge feature2",
							""
						],
						"command": "git checkout -b feature1;\ngit commit;\ngit checkout develop;\ngit checkout -b feature2;\ngit commit;\ngit commit;\ngit checkout feature1;\ngit commit;\ngit checkout develop;\ngit merge feature1;\ngit merge feature2;",
						"beforeCommand": "git checkout -b develop;\ngit commit;\ngit checkout master;\ngit tag v0;\ngit commit;\ngit tag v1;\ngit checkout develop;"
					}
				}
			]
		}
	}
};