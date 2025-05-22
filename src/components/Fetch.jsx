async function getFairytaleCardItems() {
    const response = await fetch("https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json");
    if (!response.ok) {
        throw new Error("Failed to fetch fairytale list");
    }
    const data = await response.json();
    console.log(data);
    return data;
}