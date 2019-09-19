# Erro Solution

Error: Command failed: gradlew.bat app:installDebug -PreactNativeDevServerPort=8081

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':app:validateSigningDebug'.
> Keystore file 'C:\Users\abner.andrade\Documents\React Apps\Debts\android\app\debug.keystore' not found for signing config 'debug'.

Solution:

https://github.com/facebook/react-native/issues/25629