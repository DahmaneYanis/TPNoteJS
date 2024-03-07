function descriptionFormate(description) {
    if (description.length > 20) {
        return description.substring(1, 20) + "..."
    }
    return description
}