const API_URL = "http://4.224.186.213/evaluation-service/logs";

export async function Log(stack, level, packageName, message) {

  try {

    const response = await fetch(API_URL, {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        stack,
        level,
        package: packageName,
        message
      })

    });

    if (!response.ok) {

      console.warn(
        `Logging API returned status ${response.status}`
      );

      return;
    }

    const data = await response.json();

    console.log("Log Success:", data);

  } catch (error) {

    console.warn(
      "Logging API unavailable due to CORS/auth configuration."
    );

  }
}