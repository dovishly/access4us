export class Place{
    placeId: string
    tagMap: Map<string, number>

    constructor(placeId, tag) {
        this.placeId = placeId;
        this.tagMap = new Map()
        this.tagMap.set(tag, 0)
    }

    addTag(tag) {
        if (!this.tagMap.has(tag)) {
            this.tagMap.set(tag, 1);
        } else {
            this.tagMap.set(tag, this.tagMap.get(tag) + 1);
        }

        return this.tagMap.get(tag);
    }
}