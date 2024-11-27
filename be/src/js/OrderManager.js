$(document).ready(function () {
    $('.changeStatus').on('change', function () {
        updateOrderStatus(this);
    });
});

async function updateOrderStatus(selectElement) {
    const orderId = selectElement.getAttribute('data-id');
    const newStatus = selectElement.value;

    fetch(`/api/order`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: orderId, updateData: { trangthai: newStatus } })
    })
        .then(response => response.json())
        .then(data => {
            if (data.message === "Order updated successfully") {
                alert('Order status updated successfully');
            } else {
                alert('Failed to update order status');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while updating order status');
        });
}
