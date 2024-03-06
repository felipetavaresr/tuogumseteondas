document.addEventListener('DOMContentLoaded', function () {
    var entityInfoContainers = document.querySelectorAll('.entity-info');
    var defaultSection = 'about';

    function showEntityInfo(section) {
        // Esconder todas as informações
        entityInfoContainers.forEach(function (container) {
            container.style.display = 'none';
        });

        // Mostrar apenas as informações da seção ou entidade selecionada
        var selectedContainer = document.getElementById(section + '-info');
        if (selectedContainer) {
            selectedContainer.style.display = 'block';
        }
    }

    // Exibir informações da seção "about" ao carregar a página
    showEntityInfo(defaultSection);

    // Adicionar eventos para cada menu dropdown
    var dropdown = document.getElementById('entidades');
    var dropdownExu = document.getElementById('entidades-exu');
    var dropdownPombaGira = document.getElementById('entidades-pg');

    dropdown.addEventListener('click', handleDropdownClick);
    dropdownExu.addEventListener('click', handleDropdownClick);
    dropdownPombaGira.addEventListener('click', handleDropdownClick);

    function handleDropdownClick(event) {
        var target = event.target;

        if (target.tagName === 'A') {
            var selectedSection = target.getAttribute('value');
            showEntityInfo(selectedSection);
        }
    }
});