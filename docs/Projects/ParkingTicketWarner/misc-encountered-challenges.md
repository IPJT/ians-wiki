---
sidebar_position: 1
---

# Misc Encountered Challenges

## Executing an .exe (Windows executable) from a function app

I didn't have any issues having the function execute the .exe when running it locally. However, when publishing the function to an Azure Function App I had trouble publishing the .exe itself and sucessfully referencing it from the code now running on the function app. Key was to make sure the executable was properly [copied to the debug/release folder](https://social.technet.microsoft.com/wiki/contents/articles/53248.visual-studio-copying-files-to-debug-or-release-folder.aspx):

![Copyexe](/img/copyresources.png)
_This file should not be manually updated. What is seen in the image is the result after updating the properties for the file suggested by the link above._

The full solution can be found as the accepted answer to [this](https://stackoverflow.com/questions/46537758/including-a-file-when-i-publish-my-azure-function-in-visual-studio) stackoverflow question.
