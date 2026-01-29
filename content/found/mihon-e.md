### Steps

```bash
java -version 
# confirms it's JDK 17+
where java
# add Path : PC → Properties → Advanced system settings → Environment Variables → System variables → New
# Variable name: JAVA_HOME
# Variable value: Enter the path = where java
gradle -v
```

Instead of installing Gradle. Use the repo's `./gradlew` (or `gradlew.bat` on Windows)—it's self-contained and version-matched.

1. Clone (if not done): `git clone https://github.com/[yourusername]/mihon.git`
2. `cd mihon`
3. **Run**: `gradlew.bat assembleDebug` (builds APK)
	- Gradle Wrapper is fetching the exact tools/dependencies Mihon needs.
4. **Install to device/emulator**: `gradlew.bat installDebug`

Expect initial Gradle download (few GB)—normal first run. If it fails due to Java path conflicts, prioritize JDK 17 in PATH:

- ***First run** takes 5-15+ minutes** (downloads Gradle 8.14.4 ~500MB, Android Gradle Plugin, Kotlin/JVM libs, Android SDK components—several GB total to `C:\Users\admin\.gradle\caches`). **Future builds**: Uses cached dependencies → 30 seconds.*
- *[What is the average time your Gradle build takes in Android Studio? : r/androiddev](https://www.reddit.com/r/androiddev/comments/5ej7s4/what_is_the_average_time_your_gradle_build_takes/)*

After `gradlew.bat assembleDebug` succeeds:
- **APK location**: `app\build\outputs\apk\debug\app-debug.apk`[](https://developer.android.com/build/building-cmdline)​
- **Install command** (`gradlew.bat installDebug`) auto-finds this APK and pushes to connected device/emulator via ADB

| Component          | Purpose                           | Location                                   |
| ------------------ | --------------------------------- | ------------------------------------------ |
| **Android SDK**    | Libraries, build tools, platforms | `C:\Users\admin\AppData\Local\Android\Sdk` |
| **Android Studio** | IDE (code editor + visual tools)  | `C:\Program Files\Android\Android Studio`  |

**Quick Status Check**

New terminal in `mihon/` folder:

```bash
gradlew.bat --status 
gradlew.bat clean  # Clears build/ outputs only (always safe)
# Safe cleanup of build/ folder only
```

**First build = investment.** Once complete, rebuilds take 30 seconds.

### Delete Gradle Cache

**Delete these** (safe, will redownload):
```bash
C:\Users\admin\.gradle\caches    ← Main cache (several GB) 
C:\Users\admin\.gradle\daemon    ← Background processes
```

**Delete These (Windows)**
```bash
# Global Gradle cache** (all projects)
C:\Users\admin\.gradle\caches\ # Delete entire folder​

rmdir /s C:\Users\admin\.gradle\caches  # Full cleanup

# Optional extras (if space critical):  
C:\Users\admin\.gradle\daemon\` # Delete  
mihon\.gradle\ # Delete (project-specific)
```

**When It Redownloads**
- Next `gradlew.bat assembleDebug` → Downloads again (5-15 min)
- **Future builds**: Uses cache → 30 seconds