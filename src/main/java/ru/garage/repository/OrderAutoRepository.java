package ru.garage.repository;


import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;
import ru.garage.entity.Garage;
import ru.garage.entity.OrderAuto;

@RepositoryRestResource(collectionResourceRel = "orderauto", path = "orderauto")
public interface OrderAutoRepository extends PagingAndSortingRepository<OrderAuto, Long> {

    @Transactional
    void deleteByDescription(@Param("description") String description);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM order_auto", nativeQuery = true)
    void deleteAll();
}
