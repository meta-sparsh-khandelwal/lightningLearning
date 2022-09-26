({
    createContact: function(component, newContact) {
        let createEvent = component.getEvent("addContact");
        createEvent.setParams({ "contact": newContact });
        createEvent.fire();
        component.set("v.newContact", { 'sobjectType': 'Contact',
        'FirstName': '',
        'LastName': '',
        'Email': '' });
    }
})