import Stack from "../Stack";

export default function getAllBlogs(contentType, condition) {
	const Query = Stack.ContentType(contentType).Query();

	if (typeof condition != "undefined") {
		return Query.where(condition.prop, condition.value)
			.toJSON()
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
