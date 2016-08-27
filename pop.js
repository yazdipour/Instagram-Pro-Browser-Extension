$('.clr').click(function(event) {
	chrome.storage.sync.set({ 'myColor': $(this).css('background-color') });
});
$('#blackBtn').click(function(event) {
	chrome.storage.sync.set({ 'theme': 'dark' });
});
$('#lightBtn').click(function(event) {
	chrome.storage.sync.set({ 'theme': 'light' });
});