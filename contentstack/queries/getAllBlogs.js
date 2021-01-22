import Stack from "../Stack";

export default function getAllBlogs(contentType, id = null) {
	const Query = Stack.ContentType(contentType).Query();
	if (id) {
		console.log("hello", id);
		const Query = Stack.ContentType(contentType)
			.Entry(id)
			.includeReference("related_blogs_link");
		return Query.fetch().then(
			function success(entry) {
				let data = entry.get("title");
				let result = entry.toJSON();
				return result;
				console.log(entry.get("title")); // Retrieve field value by providing a field's uid
				console.log(entry.toJSON()); // Convert the entry result object to JSON
			},
			function error(err) {
				console.log(err);
				// err object
			}
		);
	} else {
		return Query.toJSON()
			.find()
			.then(
				function success(result) {
					return result[0];
				},
				function error(err) {
					console.log(err);
					return err;
				}
			);
	}
}
